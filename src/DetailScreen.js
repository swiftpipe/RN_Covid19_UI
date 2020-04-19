import React from 'react';
import {View, StyleSheet, Dimensions, Image, ScrollView} from 'react-native';
import {Block, Button, TextView} from './components';
import {Colors} from './color';
import Feather from 'react-native-vector-icons/Feather';
const W = Dimensions.get('window').width;
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  doctor: {
    position: 'absolute',
    top: 100,
    left: -30,

    // width: 50,
    // height: 80,
  },
  wrapperimage: {
    position: 'absolute',
    bottom: 0,

    alignSelf: 'center',
    width: W,
    height: 300,
  },
  bg: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: -(930 - W / 2),
    alignSelf: 'center',
    // top: 500 - W / 2,
    // left: 500 - W / 2,
    borderRadius: 1000,
    overflow: 'hidden',
  },
  containerHeader: {
    position: 'relative',
  },
  map: {
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
  },

  img_item: {
    width: (1.2 * W) / 3,
    height: (1.2 * W) / 3,
  },
  field_con: {
    // marginLeft: W / 2,
    position: 'absolute',
    width: (2 * W) / 3,
    left: W / 3 + 10,
    top: 10,
    paddingVertical: 10,
  },
  textDesc: {
    lineHeight: 20,
    marginTop: 10,
    maxWidth: (2 * W) / 3.4,
  },
  btn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

const Item = ({icon, title}) => {
  return (
    <Block block centered>
      <Button middle shadow color="#fff" padding={10} borderRadius={12}>
        <Image source={icon} />
        <TextView bold center>
          {title}
        </TextView>
      </Button>
    </Block>
  );
};

const ItemField = ({icon, title, desc}) => {
  return (
    <Button>
      <Block
        direction="row"
        borderRadius={10}
        shadow
        color="#fff"
        padding={6}
        paddingHorizontal={10}
        style={{marginTop: 10}}>
        <Image style={styles.img_item} resizeMode="contain" source={icon} />
        <Block padding={10} style={styles.field_con}>
          <TextView size={16} bold>
            {title}
          </TextView>
          <TextView style={styles.textDesc}>{desc}</TextView>
        </Block>
        <Button style={styles.btn}>
          <Feather name="chevron-right" color={Colors.blue} size={30} />
        </Button>
      </Block>
    </Button>
  );
};

const DetailScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Block block color="#fafafa">
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wrapperimage}>
            <Image
              style={styles.doctor}
              source={require('./images/coronadr.png')}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image style={styles.img} source={require('./images/virus.png')} />
        </Block>
        <Block padding={10}>
          <TextView h6>Symptomps</TextView>
          <Block direction="row" paddingVertical={10}>
            <Item icon={require('./images/headache.png')} title="Headache" />
            <Block width={10} />
            <Item icon={require('./images/caugh.png')} title="Caugh" />
            <Block width={10} />
            <Item icon={require('./images/fever.png')} title="Fever" />
          </Block>
        </Block>
        <Block padding={10}>
          <TextView h6>Prevention</TextView>
          <Block>
            <ItemField
              title="Wear face mask"
              desc="Since the start of the coronavirus outbreak some places have fully
          embraced wearing face masks, and anyone caught without one risks
          becoming a social pariah."
              icon={require('./images/wear_mask.png')}
            />
            <ItemField
              title="Wash your hands"
              desc="These diseases include 
              gastrointestinal
            infections, such as Salmonella, and respiratory
            infections, 
            such as influenza."
              icon={require('./images/wash_hands.png')}
            />
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};

export default DetailScreen;
