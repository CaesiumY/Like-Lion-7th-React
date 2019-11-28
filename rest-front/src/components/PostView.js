import React, { Component } from "react";
import api from "../api";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class postView extends Component {
  handleDelete = async (payload, e) => {
    console.log(payload, e.target);
    await api.deletePost(payload.id);
    this.props.getPosts();
  };

  render() {
    const { title, body, id } = this.props;

    return (
      <Card className={"card"}>
        <CardContent>
          <Typography color="textSecondary">{id}</Typography>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <hr />
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            onClick={this.handleDelete.bind(this, { id })}
          >
            삭제하기
          </Button>
        </CardActions>
      </Card>
    );
  }
}
