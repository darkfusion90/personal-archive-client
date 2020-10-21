import React from 'react'
import { Menu, MenuProps, MenuItem, ListItemIcon, ListItemText, MenuItemProps } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import { Link } from 'react-router-dom'

type IMoreOptionsMenuProps = MenuProps & {
    onDeletePost: VoidCallback
    editPostUrl: string
}

const MoreOptionsMenu: React.FC<IMoreOptionsMenuProps> = ({
    onDeletePost,
    editPostUrl,
    ...props
}) => {
    return (
        <Menu
            id='more-options-post'
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            {...props}
        >
            <CustomMenuItem
                icon={EditIcon}
                text='Edit Post'
                linkTo={editPostUrl}
            />
            <CustomMenuItem icon={DeleteIcon} text='Delete Post' onClick={onDeletePost} />
        </Menu>
    )
}

type CustomMenuItemProps = MenuItemProps & {
    icon: React.ElementType
    text: string
    linkTo?: string
}

const CustomMenuItem: React.FC<CustomMenuItemProps> = ({
    icon: Icon,
    text,
    linkTo,
    ...props
}) => {
    const linkProps: any = {}
    if (Boolean(linkTo)) {
        linkProps.component = Link
        linkProps.to = linkTo
    }

    return (
        // @ts-ignore
        <MenuItem {...props} {...linkProps}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText>
                {text}
            </ListItemText>
        </MenuItem>
    )
}

export default MoreOptionsMenu
