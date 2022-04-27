import styles from "../styles/Collage.module.css";
import {Transform3d} from "react-css-transform";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {Zoom} from "react-reveal";


export default function CollageImage(props) {
    const yAxis = { x: 0, y: 1, z: 0 };
    const zAxis = { x: 0, y: 0, z: 1 };
    const xAxis = { x: 1, y: 0, z: 0 };

    // use this code if you want the rotation to be dependent on scroll position & object position
    //
    // const rotation_limit = 60
    //
    // const posRef = useRef()
    //
    // const [rotation, setRotation] = useState(0)
    //
    // useEffect(() => {
    //     // if(props.offsetX-rotation)
    //
    //     const object_offset = posRef.current.offsetTop
    //     const window_offset = props.offsetY
    //
    //     console.log("Object: "+ object_offset)
    //     console.log("Window: "+ window_offset)
    //
    //     if (window_offset-32-object_offset)
    //
    //     // console.log(props.offsetX-posRef.current.offsetTop)
    //     setRotation(posRef.current.offsetTop)
    // })

    const getRandomizer = (min, max) => {
        return min + (Math.random() * (max-min))
    }

    const [rotateX, setRotateX] = useState(100)
    const [rotateY, setRotateY] = useState(100)

    useEffect(() => {
        setRotateX(getRandomizer(200,500))
        setRotateY(getRandomizer(200,500))
    }, [])

    const text = () => {
        return (
            <Zoom>
                <h2 className={styles.quote}>{props.imageText}</h2>
            </Zoom>
        )
    }

    return (
        <>
            <div className={styles.item}>
                 {/*ref={posRef}>*/}
                {!props.even && text()}
                <div className={styles.image}>
                    <Transform3d rotate={props.offsetX/rotateX} rotateAxis={xAxis}>
                        <Transform3d rotate={props.offsetY/rotateY} rotateAxis={yAxis}>
                            <Image
                                src={props.imageSrc}
                                alt={"jtad's cool image"}
                            />
                        </Transform3d>
                    </Transform3d>
                </div>
                {props.even && text()}

            </div>
        </>
    )
}