import React from "react";
import CardComp from "../components/card";
import Header from "../components/header";
import Nav from "../components/nav";


class Projetos extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Nav />
                <section>
                    <CardComp
                        image=""
                        title=""
                        description=""
                        link=""
                    />
                </section>
            
            </>
               
          
        )
    }
}

export default Projetos;