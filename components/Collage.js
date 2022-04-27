

import styles from "../styles/Collage.module.css"

import React, { useEffect, useState } from 'react';


import image1 from "../public/3-3.PNG"
import image2 from "../public/4-3.PNG"
import image3 from "../public/6-3.PNG"
import image4 from "../public/7-4.PNG"
import image5 from "../public/2-1.PNG"
import image6 from "../public/5-1.PNG"
import image7 from "../public/8-1.PNG"
import image8 from "../public/9-3.PNG"
import image9 from "../public/10-1.PNG"

import CollageImage from "./CollageImage";


export default function Collage() {

    const images = [
        {
            src: image1,
            text: ""
        },
        {
            src: image2,
            text: ""
        },
        {
            src: image3,
            text: ""
        },
        {
            src: image4,
            text: ""
        },
        {
            src: image5,
            text: ""
        },
        {
            src: image6,
            text: ""
        },
        {
            src: image7,
            text: ""
        },
        {
            src: image8,
            text: ""
        },
        {
            src: image9,
            text: ""
        }
    ]

    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;

    const [offset, setOffset] = useState(0);

    const [data, setData] = useState(images)

    useEffect(() => {
        // fetching random data part
        fetch("https://api.quotable.io/quotes?limit=9")
            .then(respose => {
                console.log(respose)
                return respose.json()
            })
            .then(json => {
                let current_images = images
                for (let i = 0; i < images.length; i++) {
                    current_images[i].text = json.results[i].content
                }
                setData(current_images)
            })

        // scrolling animation part
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // console.log("onScroll: "+offset);



    return (
        <div className={styles.container}>
            {data.map((image, index) =>
                <>
                    <CollageImage
                        imageSrc={image.src}
                        imageText={image.text}
                        offsetX={index%2===0?-offset:offset}
                        offsetY={offset}
                        even={index%2===0}
                        key={"image-key-"+index}
                    />
                </>
            )}
        </div>
    )
}