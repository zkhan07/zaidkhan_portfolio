import React from 'react'
import { Tab } from 'semantic-ui-react';
import Profile from "./Profile";
import Claps  from "./Claps";
import Highlights from './Highlights';
import Responses from "./Responses";

const panes = [
  {
    menuItem: 'Profile',
    render: () => <Tab.Pane attached={false}> <Profile /> </Tab.Pane>,
  },
  {
    menuItem: 'Claps',
    render: () => <Tab.Pane attached={false}> <Claps /> </Tab.Pane>,
  },
  {
    menuItem: 'Highlights',
    render: () => <Tab.Pane attached={false}> <Highlights /> </Tab.Pane>,
  },
  {
    menuItem: 'Responses',
    render: () => <Tab.Pane attached={false}> <Responses /> </Tab.Pane>,
  },
]

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing