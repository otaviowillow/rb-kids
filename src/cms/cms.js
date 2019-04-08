import CMS from 'netlify-cms'
import styles from '!css-loader!sass-loader!../components/all.sass'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PoliciesPagePreview from './preview-templates/PoliciesPagePreview'
import EnrollmentPreview from './preview-templates/EnrollmentPreview'
import PhotoGalleryPreview from './preview-templates/PhotoGalleryPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import LatestUpdatesPreview from './preview-templates/LatestUpdatesPreview'
import ProgramsPreview from './preview-templates/ProgramsPreview'
import EmployeesPreview from './preview-templates/EmployeesPreview'

CMS.registerPreviewStyle(styles.toString(), { raw: true })
CMS.registerPreviewTemplate('index-page', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('enrollment', EnrollmentPreview)
CMS.registerPreviewTemplate('policies', PoliciesPagePreview)
CMS.registerPreviewTemplate('photo-gallery', PhotoGalleryPreview)
CMS.registerPreviewTemplate('latest-updates', LatestUpdatesPreview)
CMS.registerPreviewTemplate('programs', ProgramsPreview)
CMS.registerPreviewTemplate('employees', EmployeesPreview)
