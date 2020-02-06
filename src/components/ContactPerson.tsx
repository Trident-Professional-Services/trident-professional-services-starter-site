import React from "react"
import Img from "gatsby-image"
import IContactPersonProps from "./IContactPersonProps"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"

export default function ContactPerson(props: IContactPersonProps): JSX.Element {
  const { emailAddress,linkedIn, name, profileImage,telephone, title, twitter } = props
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
        {telephone ? <a href={"tel:" + telephone}><FontAwesomeIcon icon={faPhone}/> </a>:undefined}
        {linkedIn ? <a href={linkedIn}><FontAwesomeIcon icon={faLinkedin}/></a> : undefined}
        {twitter ? <a href={"https://twitter.com/"+ twitter.replace("@", "")}><FontAwesomeIcon icon={faTwitter} /></a> : undefined}
      </div>
    </article>
  )
}
