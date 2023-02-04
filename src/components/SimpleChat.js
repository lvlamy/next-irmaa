import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import styles from '../styles/chatbot.module.css'

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeframe: '',
      signe: '',
      result:'',


    };

  }
  
  
  componentWillMount() {
    const { steps } = this.props;
    const { timeframe, signe } = steps;
    this.setState({ timeframe, signe });

  }

    async componentDidMount() {
        const response = await fetch("/api/generate-prompt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ timeframe : this.state.timeframe.value, signe : this.state.signe.value}),
        });
        const data = await response.json();
        this.setState({ result: data.result.replaceAll("\n", "<br />") });

    }

  render() {
    const { result } = this.state;

    return (
      <div dangerouslySetInnerHTML={{ __html: result.substr(12) }}>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
  width: PropTypes.object,
  hideHeader: PropTypes.bool,
  hideSubmitButton: PropTypes.bool,
  placeholder: PropTypes.string,
};

Review.defaultProps = {
  steps: undefined,
};



class SimpleChat extends Component {

    
  render() {
    return (

      <section className="chatbot-section" id="chatbot">
        <h1 >Essaye maintenant : </h1>

            <ChatBot 
            id="chatbot"
            classname={styles.chat}
            width="500px"

            height="500px"
            hideHeader='true'
            hideSubmitButton='true'
            placeholder=""

            steps={[
                {
                id:'1', 
                message:'Pour quand veux tu consulter ton signe astro ?', 
                trigger:'timeframe',
                },

                {
                id:'timeframe', 
                options:[
                    {value:"l'horoscope quotidienne", label:'Quotidien', trigger:'quotidien'},
                    {value:"l'horoscope hebdomadaire", label:'Hebdo', trigger:'hebdo'},
                    {value:"l'horoscope du mois", label:'Mois', trigger:'mois'},
                    {value:"l'horoscope de l'annee", label:'Annuel', trigger:'annuel'},

                ],
                },

                {
                id: 'quotidien',
                message: 'Ok va pour quotidien',
                trigger: '2',
                },
                
                {
                id: 'hebdo',
                message: 'Ok va pour hebdo',
                trigger: '2',
                },

                {
                id: 'mois',
                message: "Ok va pour l'horoscope du mois",
                trigger: '2',
                },

                {
                id: 'annuel',
                message: 'Ok va pour annuel',
                trigger: '2',
                },
                {
                    id:'2', 
                    message:'Quel est ton signe astro ?', 
                    trigger:'signe',
                },
                {
                    id:'signe', 
                    options:[

                    {value:'poisson', label:'Poisson', trigger:'5'},
                    {value:'cancer', label:'Cancer', trigger:'5'},
                    {value:'verseau', label:'Verseau', trigger:'5'},
                    {value:'capricorne', label:'Capricorne', trigger:'5'},
                    
                    ]
                },
                {
                id:'5', 
                message:'tres bien laissez moi reflechir...', 
                trigger : 'review'
                },

                {
                id: 'review',
                component: <Review />,
                asMessage: true,
                end : true
                },
        
            ]}
            />
</section>
    );
  }
}

export default SimpleChat;