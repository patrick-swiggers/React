import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    };

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    renderComments(dish) {
        if (dish != null) {
            const comments = dish.comments;
            const res = comments.map((element) => {
                return (
                    <span>
                        {element.comment}<br />
                        -- {element.author}<br /><br />
                    </span>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    {res}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    };

    render() {
        const Dish = this.props.dish;
        return (
            <div className="row">
                <div className="col-md-5 m-1">
                    {this.renderDish(Dish)}
                </div>
                <div className="col-md-5 m-1">
                    {this.renderComments(Dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;