"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Color } from "three";

extend({ TextGeometry });

type Props = {
    children?: React.ReactNode;
};

const color = "#222222";
const glowColor = "#c6f6c8";

const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Mesh & { material: { color: Color } }>(null);
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(0),
            degreesToRadians(360),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    }, []);

    useFrame((_, delta) => {
        if (!ref.current) {
            return;
        }
        ref.current.rotation.x +=
            Math.random() * delta * (Math.random() > 0.5 ? -1 : 1);
        ref.current.rotation.y +=
            Math.random() * delta * (Math.random() > 0.5 ? -1 : 1);
    });

    return (
        <mesh
            ref={ref}
            scale={hover || active ? 3 : 1}
            onClick={() => setActive((prev) => !prev)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <icosahedronGeometry args={[0.02, 0]} />
            <meshBasicMaterial color={active ? glowColor : color} wireframe />
        </mesh>
    );
};

function Scene({ numStars = 250 }) {
    const gl = useThree((state) => state.gl);
    const time = useTime();
    const [activeStars, setActiveStars] = useState<{ x: number; y: number }[]>(
        []
    );

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            //distance.get(),
            //(yAngle.get() * 5) % 360,
            //time.get() * 0.00005 + xAngle.get()
            5,
            time.get() * 0.000007,
            time.get() * 0.000025
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => gl.setPixelRatio(0.3));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star p={progress(0, numStars, i)} />);
    }

    return <>{stars}</>;
}

const Space: React.FC<Props> = () => {
    const handleWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {};

    return (
        <div
            className="fixed bottom-0 left-0 right-0 top-0 bg-black"
            onWheel={handleWheel}
        >
            <Canvas
                gl={{ antialias: false, pixelRatio: window.devicePixelRatio }}
            >
                <Scene numStars={300} />
            </Canvas>
        </div>
    );
};

export default Space;
