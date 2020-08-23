import { CatalogModel } from '../../models/Catalog'
import { ArchiveModel } from '../../models/Archive'
import { ImageServeOrderModel } from '../../models/ImageServeOrder'
// import { ImageModel } from '../../models/Image'
import { TagModel } from '../../models/Tag'
// import { AssignedImageModel } from '../../models/AssignedImages'
import { ImageDocument } from '../../../interfaces/models'
import { log } from '../logger'
import { RandomOrder } from './random'
import { SequentialOrder } from './sequential'

interface Params {
  user: Express.User
  archiveId: any
}
interface ReturnType {
  success: boolean
  message: string
  data?: ImageDocument
}

async function selectImageForAssignment({
  user,
  archiveId,
}: Params): Promise<ReturnType> {
  log({
    message: `Selecting image for assignment for user ${user.data._id} for archive ${archiveId}`,
    type: 'info',
  })
  const archive = await ArchiveModel.findById(archiveId)
  const catalog = await CatalogModel.findById(archive.catalog)
  const imageServeOrder = await ImageServeOrderModel.findById(
    catalog.imageServeOrder.toString()
  )

  //Get all images tagged by the user
  const imagesTaggedByUser = await TagModel.find({
    userId: user.data._id,
  })

  const taggedImageIdOnly = imagesTaggedByUser.map((imageTag) =>
    imageTag.imageId.toString()
  )

  log({
    message: `Serve order = ${imageServeOrder.type} for catalog ${catalog._id} with server order doc = ${imageServeOrder._id}`,
    type: 'info',
  })

  if (imageServeOrder.type === 'random') {
    const result = await RandomOrder({
      archiveId: archiveId,
      taggedImageIdOnly: taggedImageIdOnly,
      user: user,
    })
    return result
  }

  if (imageServeOrder.type === 'sequential') {
    const result = await SequentialOrder({
      archive: archive,
      imagesTaggedByUser: imagesTaggedByUser,
      imageServeOrder: imageServeOrder,
      user: user,
    })
    return result
  }

  log({
    message: `No image serve order found for catalog ${catalog._id} of archive ${archiveId}`,
    type: 'info',
  })
  return {
    success: false,
    message: 'No Image serve order found',
  }
}

export { selectImageForAssignment }
