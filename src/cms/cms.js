import CMS from 'netlify-cms'
import styles from '!css-loader!sass-loader!../components/all.sass'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PhotoGalleryPreview from './preview-templates/PhotoGalleryPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewStyle(styles.toString(), { raw: true })
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('photo-gallery', PhotoGalleryPreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
