import React from 'react';

const OverView = styled.section`
margin: 0;
padding-top: 20px;
border-top: 1px solid #ebebeb;
display: block;
`;

const Row = styled.div`
margin-left: -10px;
margin-right: -10px;
`

const ColumnOne = styled.div`
width: 33.33333333%;
float: left;
position: relative;
min-height: 1px;
padding-left: 10px;
padding-right: 10px;
`

const ColumnTwo = styled.div`
padding-left: 0;
padding-right: 0;
width: 66.66666667%;
float: left;
position: relative;
min-height: 1px;
`

const ListedBy = styled.div`
display: flex;
align-items: center;
line-height: 1.2;
padding-right: 15px;
`
const Image = styled.img`
margin-right: 15px;
height: 90px;
width: 90px;
box-shadow: 0 1px 2px rgba(0,0,0,0.08);
border-radius: 50%;
vertical-align: middle;
`

const HostInfo = styled.div`
display: flex;
line-height: 1.2;
flex-direction: column;
`

const HostName = styled.a`
border-bottom: 1px solid #ebebeb;
transition: all 0.25s ease 0s;
color: inherit;
text-decoration: none;
background-color: transparent;
`
    

const Overview = (props) => {

    return (
        <OverView>
            <Row>
                <ColumnOne>
                <ListedBy>
                    <Image src={props.host.image}></Image>
                    <HostInfo>
                        <strong>Hosted by</strong>
                        <div>
                            <HostName>
                            {props.host.name}
                            </HostName>
                        </div>
                    </HostInfo>
                </ListedBy>
                <ColumnTwo>
                    <p>{props.body}</p> 
                </ColumnTwo>  
                </ColumnOne>
            </Row>  
        </OverView>

    )
}

export default Overview;
