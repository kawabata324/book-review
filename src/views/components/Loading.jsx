import React from "react";
import ReactLoading from "react-loading";
import {useSelector} from "react-redux";

const Loading = ({children}) => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    const loadingText = useSelector((state) => state.loading.loadingText);


    if (isLoading) {
        return (
            <section>
                <div>
                    <ReactLoading
                        type="spin"
                        color="#ebc634"
                        height="100px"
                        width="100px"
                    />
                    <p>{loadingText}</p>
                </div>
            </section>
        );
    } else {
        return <>{children}</>;
    }
};

export default Loading;