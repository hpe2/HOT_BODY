import React,{useState} from "react";
import Navbar from "../Navbar";
import { useTrail, a } from '@react-spring/web'

import styles from './../../style/event/intro.module.css'

    const Trail = ({ open, children }) => {
        const items = React.Children.toArray(children)
        const trail = useTrail(items.length, {
          config: { mass: 5, tension: 2000, friction: 200 },
          opacity: open ? 1 : 0,
          x: open ? 0 : 20,
          height: open ? 110 : 0,
          from: { opacity: 0, x: 20, height: 0 }
        })
        return (
          <div>
            {trail.map(({ height, ...style }, index) => (
              <a.div key={index} className={styles.trailsText} style={style}>
                <a.div style={{ height }}>{items[index]}</a.div>
              </a.div>
            ))}
          </div>
        )
      }
      export default function Intro() {
        const [open, set] = useState(true)
        return (
          <div className={open !== true?"event-banner-container-hide":"event-banner-container"} onClick={() => set(false/* state => !state */)}>
            <Trail open={open}>
              <span>Are</span>
              <span>you</span>
              <span>Want a</span>
              <span>Hot Body</span>
            </Trail>
          </div>
        )
      }
      