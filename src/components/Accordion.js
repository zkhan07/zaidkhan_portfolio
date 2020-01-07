import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }



  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h3>See all of your bills and money at a glance</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Our marketing platform helps you find new customers,
            build stronger relationships, and boost sales through
            deeper customer insights.
          </p>
          <button className="ui red button">Learn more</button>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
        <Icon name='dropdown' />
          <h3>Create budgets easily with tips tailored to you</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Reach new customers, send personalized behavior‑based campaigns,
            and increase engagement with your app.
          </p>
          <button className="ui red button">Learn more</button>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          <h3>Enjoy access to unlimited free credit scores, without harming your credit</h3>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Find product‑market fit, learn from user feedback, and
            launch your first marketing campaigns.
          </p>
          <p>
            A pet shop may be the most convenient way to buy a dog. Buying a dog
            from a private owner allows you to assess the pedigree and
            upbringing of your dog before choosing to take it home. Lastly,
            finding your dog from a shelter, helps give a good home to a dog who
            may not find one so readily.
          </p>
          <button className="ui red button">Learn more</button>
        </Accordion.Content>
      </Accordion>
    )
  }
}

