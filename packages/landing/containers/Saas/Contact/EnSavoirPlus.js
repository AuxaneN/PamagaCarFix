import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Box from '../../../../common/src/components/Box';
import Heading from '../../../../common/src/components/Heading';
import Text from '../../../../common/src/components/Text';
import Button from '../../../../common/src/components/Button';
import {FormEnSavoirPlus} from '../../../../common/src/components/Form/FormEnSavoirPlus';
import Container from '../../../../common/src/components/UI/Container';


class ContactSection extends Component {
  constructor( props){
    super(props)
    this.state={
      formHidden: true
    }
  }
  handleClick = ()=>{
    this.setState({formHidden: false})
  }
  formHide= (e)=>{
    e.target.className.match('FormulaireWrapper') || e.target.className.match('closeFormBtn')
    ?
    this.setState({formHidden: true})
    :
    null
  }

  render(){  
  return (
    <Box {...this.props.sectionWrapper}>
        <Box {...this.props.row}>
          <Box>
              <Button {...this.props.button} title="En savoir plus" onClick={this.handleClick}/>
          </Box>
        </Box>
        <FormEnSavoirPlus hidden={this.state.formHidden} click={this.formHide} id={this.props.id}/>
    </Box>
  );}
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  button: PropTypes.object,
  note: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    id: 'contact_section',
    as: 'section',
    pt: ['0px', '10px', '20px', '20px'],
    pb: ['0px', '0px', '0px', '0px', '0px'],
  },
  cont:{
    paddingLeft: '0px!important'
  },
  secTitleWrapper: {
    mb: ['20px', '20px', '20px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: `${2}`,
    letterSpacing: '0.15em',
    fontWeight: `${6}`,
    color: 'primary',
    mb: `${0}`,
  },
  secHeading: {
    as: 'p',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: `${0}`,
  },
  row: {
    flexBox: true,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  contactWrapper: {
    width: [1, 1, 1, 1 / 2],
    textAlign:'center',
    flexBox: true,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: `${4}`,
  },
  note: {
    fontSize: ['13px', '14px', '15px', '15px', '15px'],
    color: '#5d646d',
    lineHeight: '1.87',
    textAlign: 'center',
  },
};

export default ContactSection;
