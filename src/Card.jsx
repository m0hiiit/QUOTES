import { useState } from "react";

const Card = ({ data }) => {
    return (
        <>
            {!data ? (
                <p></p>
            ) : (
                <>
                    {data.map((cval, id) => {
                        // console.log(cval.category);
                        return (
                            <>
                                <div className="container d-flex justify-content-center">
                                    <div className="card text-center cont" key={id}>
                                        <div className="card-body d-flex flex-column">
                                            <h1 style={{ fontFamily: "'PT Serif', serif" }} className="mb-0 mt-3">"</h1>
                                            <h5 className="card-title happy mt-1"><b>{cval.category.toUpperCase()}</b></h5>
                                            <p className="card-text mt-5">{`" ${cval.quote} "`}</p>
                                            <h2 className="btn align-self-end hoverClass happy"> - {cval.author}</h2>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </>
            )}
        </>
    )
}
export default Card;