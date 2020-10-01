import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Popper,
  Fade,
  Paper
} from "@material-ui/core";
import moment from "moment";

import { MockData } from "../mock";
import "./PopupContent.css";
import VersionModal from "./VersionModal";

const maxChars = 200;

export default function PopupContent(props) {
  const [chosenVersion, setChosenVersion] = React.useState(null);

  const openVersion = (version) => {
    props.togglePopper();
    setChosenVersion(version);
  };
  const closeVersion = () => {
    setChosenVersion(null);
  };

  const renderItems = () => {
    return MockData.map((version, index) => (
      <>
        <ListItem
          button
          alignItems='flex-start'
          onClick={() => openVersion(version)}
          selected={props.showVersionUpdate && index === 0}
          key={index}
        >
          <ListItemAvatar>
            <Avatar
              alt={version.title}
              src={require(`../images/${version.picture}.jpg`)}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <div className='version-title'>
                <span>{`גרסא מספר ${version.title}`}</span>
                <span>{version.date}</span>
                {/* <span>{moment(version.date, "DD/MM/YYYY").format("lll")}</span> */}
              </div>
            }
            secondary={
              <div>
                {version.description.length > maxChars
                  ? version.description.substring(0, maxChars) + "..."
                  : version.description}
              </div>
            }
          />
        </ListItem>
        {index < MockData.length - 1 && (
          <Divider variant='inset' component='li' key={"divider" + index} />
        )}
      </>
    ));
  };

  return (
    <>
      <Popper
        open={props.open}
        anchorEl={props.anchorEl}
        placement={"bottom-start"}
        transition
        style={{ zIndex: "1101" }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <List className='versions-list'>{renderItems()}</List>
            </Paper>
          </Fade>
        )}
      </Popper>
      <VersionModal
        open={Boolean(chosenVersion)}
        version={chosenVersion}
        closeVersion={closeVersion}
      ></VersionModal>
    </>
  );
}
