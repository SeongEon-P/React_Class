import React from "react";


const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifycontent: "center",
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifycontent: "center",
    },
    titleText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    contentText: {
        color: "black",
        fontSize: 16,
    },
    dateText: {
        color: "black",
        fontSize: 16,
    },
};

function User(props){
    return (
        <div style={styles.imageContainer}>
            <img src={props.src} style={styles.image} />
            <span style={styles.nameText}>{props.name}</span>
        </div>
    );
}


function Board(props) {
    return (
        <div style={styles.wrapper}>
            <div>
                <User src={props.imgUrl} name={props.name} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.titleText}>{props.title}</span>
                <span style={styles.contentText}>{props.content}</span>
                <span style={styles.dateText}>{props.date}</span>
            </div >
        </div >
    );
}
export default Board;