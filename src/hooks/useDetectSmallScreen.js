import { useEffect, useState } from "react"
import { detectMobileAndTablet, isSSR } from "../utils"

export default () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    let handleWindowSizeChange
    // if (isSSR) is necessary to prevent error during the gatsby build
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth)
      // set initial innerWidth when component mounts
      setWindowWidth(window.innerWidth)
    }
    // Add event listener to update windowWidth in state
    window.addEventListener("resize", handleWindowSizeChange)
    return () => window.removeEventListener("resize", handleWindowSizeChange)
  }, [windowWidth])

  return detectMobileAndTablet(windowWidth)
}
