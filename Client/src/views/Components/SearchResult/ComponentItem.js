import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    height: 310,
  },
  media: {
    height: 140,
  },
});

export default function ComponentItem(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/Search/${props.idL}`}>
          <CardMedia
            className={classes.media}
            image={props.img}
            title="Contemplative Reptile"
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titre} <br /> <Badge color="warning">{props.prix} Dh</Badge>
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              textOverflow: "ellipsis",
              wordWrap: "break-word",
              overflow: "hidden",
              maxHeight: "3em",
              lineHeight: "1em",
            }}
          >
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
