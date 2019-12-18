import React, { Component, useState } from 'react';

import styled from 'styled-components';
import SlideShow from './SlideShow';
import DonationForm from './DonationForm';
import { Button, TextInput, Autocomplete, SideSheet, Pane, Heading } from 'evergreen-ui'



const Center = styled.div`
  text-align: center;
`;


class Home extends Component {
  render() {
    return (
      <Center>
        <SlideShow />
        <Paragraph />
        <Donation />
        <NewsCenter />
      </Center>
    );
  }
}

const ParagraphStyles = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  grid-column-gap: 5rem;
  padding: 10rem 20rem;
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};

  @media (max-width: 1300px) {
    padding: 3rem 10rem;
  }

  div{
    text-align: left;
    padding: 2rem;
  }
`;

const Paragraph = (props) => (
  <ParagraphStyles>
    <div>
      <h1>Why Protect Big Cats?</h1>
    </div>
    <div>
      <p>Panthera is the only organization in the world devoted exclusively to the conservation of the world’s wild cats. Our team of leading biologists and law enforcement experts develop innovative strategies to address the dire threats facing cheetahs, jaguars, leopards, lions, pumas, snow leopards, and tigers.</p>
      <p>We are on the front lines, fighting to stop poaching, prevent conflict with people, conserve wild cat habitats, and reduce unsustainable legal hunting. These proven strategies don't just protect wild cats—they also protect their vast landscapes and the endless variety of life within them. These wild places are crucial to our planet’s health—and our own.</p>
      <Button
        appearance="primary"
        marginRight={16}
        intent="warning"
      >
        Read More
      </Button>
    </div>

  </ParagraphStyles>
)



const DonationStyles = styled.div`
  padding: 5rem 20rem;
  background: url("/static/image/donationbg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 50vh;
  color: white;

`;

const Donation = () => {
  const [isShown, setIsShown] = useState(false)
  const [amount, setAmount] = useState(0)

  return (
    <>
      <DonationStyles>
        <form style={{ textAlign: "left", paddingLeft: "2rem" }}>
          <Autocomplete height={50}
            onChange={changedItem => setAmount(changedItem)}
            items={[25, 50, 100, 200, 500]}
          >
            {(props) => {
              const { getInputProps, getRef, inputValue, openMenu } = props
              return (
                <div >
                  <h1>Donate</h1>
                  <TextInput
                    placeholder="Choose or Enter an Amount"
                    value={inputValue}
                    innerRef={getRef}
                    {...getInputProps({
                      onFocus: () => {
                        openMenu()
                      }
                    })}
                  />
                  <h1>
                    to save the world's wild cats.
              </h1>
                </div>
              )
            }}
          </Autocomplete>
          <Button height={50} marginRight={16} appearance="primary" intent="success" iconBefore="heart" onClick={e => {
            e.preventDefault();
            setIsShown(true);
          }}>
            Donate!
        </Button>
        </form>
      </DonationStyles>
      <SideSheet
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading size={600}>Donation</Heading>
          </Pane>

        </Pane>

        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <img style={{ width: "100%", margin: "0 auto" }} src="/static/image/cubs.jpeg" />
          <DonationForm amount={amount} />
        </Pane>

      </SideSheet>
    </>
  )
}

const NewsCenterStyles = styled.div`

  padding: 10rem 20rem;
  text-align: left;
  background: ${props => props.theme.lightgrey};
  color: ${props => props.theme.black};
  min-height: 50vh;

  h1 {
    color: ${props => props.theme.darkBlue};
    font-size: 3.5rem;
    padding-bottom: 2rem;

  }

  .columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5rem;
  }


  img{
    width: 100%;
  }
`;

const NewsCenter = () => (
  <NewsCenterStyles>

    <h1>News Center</h1>
    <div className="columns">
      <div>
        <div>
          <img src="/static/image/news.jpg" alt="news-image" />
        </div>
        <div>
          <h4>Caracal</h4>
          <p>Caracals (Caracal caracal) are found across much of southern and central Africa. They have long powerful legs that enable them to leap as high as 10 feet, and hunt birds on the wing.</p>
          <p>Soruce: BBC Wildlife</p>
        </div>
      </div>
      <div>
        <div>
          <img src="/static/image/news.jpg" alt="news-image" />
        </div>
        <div>
          <h4>Caracal</h4>
          <p>Caracals (Caracal caracal) are found across much of southern and central Africa. They have long powerful legs that enable them to leap as high as 10 feet, and hunt birds on the wing.</p>
          <p>Soruce: BBC Wildlife</p>
        </div>
      </div>
      <div>
        <div>
          <img src="/static/image/news.jpg" alt="news-image" />
        </div>
        <div>
          <h4>Caracal</h4>
          <p>Caracals (Caracal caracal) are found across much of southern and central Africa. They have long powerful legs that enable them to leap as high as 10 feet, and hunt birds on the wing.</p>
          <p>Soruce: BBC Wildlife</p>
        </div>
      </div>
    </div>
  </NewsCenterStyles>

)

export default Home;

