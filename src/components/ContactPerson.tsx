import React from "react"
import Img from "gatsby-image"
import IContactPersonProps from "./IContactPersonProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function ContactPerson(props: IContactPersonProps): JSX.Element {
  const { emailAddress, name, profileImage, title } = props
  return (
    <article className="contact">
      {profileImage ? (
        <div className="profile-image">
          <h2>{name}</h2>
          <Img fluid={profileImage} />
          <span className="caption">{title}</span>
        </div>
      ) : (
        <div className={"profile-image"}>
          <h2>{name}</h2>
          <span className="caption">{title}</span>
        </div>
      )}
      <div className="social">
        <a href={"mailto:" + emailAddress}><FontAwesomeIcon icon={faEnvelope} /></a>
      </div>
    </article>
  )
}
