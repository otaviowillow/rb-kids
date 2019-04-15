import React from 'react'
import bytes from 'bytes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const Pdfs = ({
  fileDescription,
  files
}) => (
  <div className="pdfs">
    <h4>{fileDescription}</h4>
    <ul>
      {files.map((file, i) => (
        <li key={i}>
          {file && file.pdf ? <a href={file.pdf.publicURL}>
            <FontAwesomeIcon icon={faFilePdf} className="icon" /> {file.name} ({bytes(file.pdf.size)})
          </a> : null}
        </li>
      ))}
    </ul>
  </div>
)

export default Pdfs
