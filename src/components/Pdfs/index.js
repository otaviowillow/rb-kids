import React from 'react'
import { Link } from 'gatsby'
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
          <a href={file.pdf.absolutePath}>
            <FontAwesomeIcon icon={faFilePdf} className="icon" /> {file.name} ({bytes(file.pdf.size)})
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Pdfs
