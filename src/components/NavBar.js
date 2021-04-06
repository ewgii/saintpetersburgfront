import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BarChartIcon from '@material-ui/icons/BarChart';
import TodayIcon from '@material-ui/icons/Today';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ArchiveIcon from '@material-ui/icons/Archive';
import {ListItemIcon} from "@material-ui/core";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Входящие"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <TodayIcon />
            </ListItemIcon>
            <ListItemText primary="Сегодня"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Будущие"/>
        </ListItem>
        <ListItemLink href="/projects">
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Проекты"/>
        </ListItemLink>
        <ListItem button>
            <ListItemIcon>
                <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Архив"/>
        </ListItem>
    </div>
);
