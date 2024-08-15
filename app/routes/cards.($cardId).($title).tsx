import { useParams } from "@remix-run/react";

export default function GetCard() {
    const myParams = useParams ();

    return (
        <>
        Your get cardId: {myParams.cardId}<br />
        Your get title: {myParams.title}<br />
        </>
    );
}