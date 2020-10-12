import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'


function RenderDish({myDish, myDishComments}){
         
        if(myDish != null){
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const menu = myDishComments.map((comment)=>{
            const commDate = new Date(comment.date)
            const mydate=commDate.toLocaleDateString(undefined, options)
            return <CardBody>
                   <CardText>{comment.comment}</CardText>
                   <CardText>--{comment.author}, {mydate}</CardText>
                   </CardBody>
            })
            return(
                    
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                            <CardImg top src={myDish.image} alt={myDish.name} />
                            <CardBody>
                            <CardTitle>{myDish.name}</CardTitle>
                            <CardText>{myDish.description}</CardText>
                            </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardTitle>Comments</CardTitle>
                                    {menu}
                                
                            </Card>
                        </div>    
                    </div>

                    )
        }else{
            return(<div></div>)
        }
    }

const DishDetail = (props)=>{
        return(   
            <div className = "container">
             <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to = "/menu">Menu</ Link>
                </BreadcrumbItem>
                <BreadcrumbItem active >{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className = "col-12">
                <h3>{props.dish.name}</h3>
                <hr />
              </div>
            </div>  
            <div className = "container"> 
            <RenderDish myDish = {props.dish} myDishComments= {props.comments}/>

            </div>    
            </div>
        )
    }



export default DishDetail