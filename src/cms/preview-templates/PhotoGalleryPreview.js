import React from 'react'
import { PhotoGalleryTemplate } from '../../templates/photo-gallery'

const PhotoGalleryPreview = ({ entry, getAsset }) => {
  const entryPhotoGallery = entry.getIn(['data', 'gallery'])
  const photoGallery = entryPhotoGallery ? entryPhotoGallery.toJS() : []

  console.log(photoGallery);
  console.log(entry.getIn(['data', 'gallery']));
  return (
    <PhotoGalleryTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      gallery={photoGallery}
    />
  )
}

export default PhotoGalleryPreview
