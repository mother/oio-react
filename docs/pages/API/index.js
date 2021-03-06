import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Route } from 'react-router-dom'
import { Text, View } from '../../../src'
import ButtonPage from './Button'
import CarouselPage from './Carousel'
import FormPage from './Form'
import GridPage from './Grid'
import ListMenuPage from './ListMenu'
import ModalPage from './Modal'
import NotificationManagerPage from './NotificationManager'
import NotificationInlinePage from './NotificationInline'
import OIOProviderPage from './OIOProvider'
import OIOTransformerPage from './OIOTransformer'
import PopoverPage from './Popover'
import SpacerPage from './Spacer'
import TabMenuPage from './TabMenu'
import TextPage from './Text'
import ViewPage from './View'
import ZoomProviderPage from './ZoomProvider'
import style from './style.less'

const API = ({ match }) => (
   <div>
      <View
         position="absolute"
         top="0px"
         bottom="0px"
         width="210px"
         padding="60px 0px 0px 30px"
         borderRight="1px solid rgba(0,0,0,0.1)"
         scroll="on">
         <Text size="8" weight="medium">OIO</Text>
         <div className={style.nav}>
            <NavLink exact to={match.url} activeClassName={style.active}>
               OIOProvider
            </NavLink>
            <NavLink to={`${match.url}/button`} activeClassName={style.active}>
               Button
            </NavLink>
            <NavLink to={`${match.url}/carousel`} activeClassName={style.active}>
               Carousel
            </NavLink>
            <NavLink to={`${match.url}/form`} activeClassName={style.active}>
               Forms
            </NavLink>
            <NavLink to={`${match.url}/grid`} activeClassName={style.active}>
               Grid
            </NavLink>
            <NavLink to={`${match.url}/list-menu`} activeClassName={style.active}>
               ListMenu
            </NavLink>
            <NavLink to={`${match.url}/modal`} activeClassName={style.active}>
               Modal
            </NavLink>
            <NavLink to={`${match.url}/notification-inline`} activeClassName={style.active}>
               NotificationInline
            </NavLink>
            <NavLink to={`${match.url}/notification-manager`} activeClassName={style.active}>
               NotificationManager
            </NavLink>
            <NavLink to={`${match.url}/oio-transformer`} activeClassName={style.active}>
               OIOTransformer
            </NavLink>
            <NavLink to={`${match.url}/popover`} activeClassName={style.active}>
               Popover
            </NavLink>
            <NavLink to={`${match.url}/spacer`} activeClassName={style.active}>
               Spacer
            </NavLink>
            <NavLink to={`${match.url}/tab-menu`} activeClassName={style.active}>
               TabMenu
            </NavLink>
            <NavLink to={`${match.url}/text`} activeClassName={style.active}>
               Text
            </NavLink>
            <NavLink to={`${match.url}/view`} activeClassName={style.active}>
               View
            </NavLink>
            <NavLink to={`${match.url}/zoom-provider`} activeClassName={style.active}>
               ZoomProvider
            </NavLink>
         </div>
      </View>
      <View
         position="absolute"
         left="210px"
         right="0px"
         height="100%"
         scroll="on">
         <Route path={`${match.url}/button`} component={ButtonPage} />
         <Route path={`${match.url}/carousel`} component={CarouselPage} />
         <Route path={`${match.url}/form`} component={FormPage} />
         <Route exact path={match.url} component={OIOProviderPage} />
         <Route path={`${match.url}/grid`} component={GridPage} />
         <Route path={`${match.url}/list-menu`} component={ListMenuPage} />
         <Route path={`${match.url}/modal`} component={ModalPage} />
         <Route path={`${match.url}/notification-inline`} component={NotificationInlinePage} />
         <Route path={`${match.url}/notification-manager`} component={NotificationManagerPage} />
         <Route path={`${match.url}/oio-transformer`} component={OIOTransformerPage} />
         <Route path={`${match.url}/popover`} component={PopoverPage} />
         <Route path={`${match.url}/spacer`} component={SpacerPage} />
         <Route path={`${match.url}/tab-menu`} component={TabMenuPage} />
         <Route path={`${match.url}/text`} component={TextPage} />
         <Route path={`${match.url}/view`} component={ViewPage} />
         <Route path={`${match.url}/zoom-provider`} component={ZoomProviderPage} />
      </View>
   </div>
)

API.propTypes = {
   match: PropTypes.object.isRequired
}

export default API
