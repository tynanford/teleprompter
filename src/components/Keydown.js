import {useEffect} from "react";

export default function KeyDown(key, action) {
    useEffect(() => {
        function onKeydown(e) {
            if (e.key === key) action()
        }
        window.addEventListener('keydown', onKeydown);
        return () => window.removeEventListener('keydown', onKeydown);
    }, []);
}