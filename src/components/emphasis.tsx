import React from "react"
import IEmphasisProps from "./IEmphasisProps"
export default function Emphasis(props: IEmphasisProps): JSX.Element {
  const { children } = props
  return <span className="emphasis">{children}</span>
}
