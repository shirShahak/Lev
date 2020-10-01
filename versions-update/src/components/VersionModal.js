import React from "react";
import {
  Fade,
  Modal,
  Card,
  CardMedia,
  CardContent,
  CardHeader
} from "@material-ui/core";
import moment from "moment";

import "./VersionModal.css";

export default function VersionModal(props) {
  if (!props.version) return null;

  return (
    <Modal
      className='version-modal'
      open={props.open}
      onClose={props.closeVersion}
      closeAfterTransition
    >
      <Fade in={props.open}>
        <Card className='version-card'>
          <CardMedia
            className={"version-card-media"}
            image={require(`../images/${props.version.picture}.jpg`)}
            title={props.version.title}
          />
          <CardHeader
            // avatar={<Avatar>{props.version.title}</Avatar>}
            title={`גרסא מספר ${props.version.title}`}
            subheader={props.version.date}
            // subheader={moment(props.version.date, "DD/MM/YYYY").format("LLL")}
          />
          <CardContent>
            <div>{props.version.description}</div>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
}
