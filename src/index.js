import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import funcs from './logic.js';
import { Image } from 'react-bootstrap';
// import { Navbar, NavItem, NavDropdown,  Nav, MenuItem } from 'react-bootstrap';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { Well, Col, Fade, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './general.css';
import './animations.css';

/*
  This the top-right image with a link to a social network
*/
class SocialTag extends React.Component {
  render() {
    let lala = require(`${this.props.source}`);
    return(
      <NavItem href={this.props.target} target="_blank">

        <Image
          src={lala}
        //  src={require('./img/twitter_logo.jpg')}
          alt={this.props.name}
          className="socialTag"
        />
      </NavItem>
    );
  }
}

class SocialBar extends React.Component {
  render() {
    var tags = [];
    var i = 0;
    for (var item in this.props.social){
      const current = this.props.social[item];
      tags.push(<SocialTag target={current.target} source={current.source} key={i++}/>);
    }
    return tags;
  }
}

class Navigation extends React.Component {

  createMenuItem(name, number) {
    return (<NavItem
              onClick={() => {this.props.onClick(number)}}
              key={number}
              className="navButton"
            > {name} </NavItem>);
  }

  createMenu() {
    var menu = [];

    for (var name in this.props.buttons)
      menu.push(this.createMenuItem(name.toString(), this.props.buttons[name]));

    return menu;
  }


  render() {
    return(
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">IEEE Student Branch of ATEITH</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.createMenu()}
          </Nav>
          <Nav pullRight>
            <div class="social_cont">
              <SocialBar social={this.props.social} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <Image
        src={require("./img/ieee_new_logo.jpg")}
        className="main_logo"
        alt="ieee_new_logo"
        bsStyle="default"
      />
    );
  }
}

class About extends React.Component {
  render() {
    return(
      <Col xs={12} md={8} mdOffset={2} >
        <Well>
          <p>
            <span className="aboutTitle"> Τι είναι η IEEE </span> <br/>
            Η ΙΕΕΕ (Institute of Electrical and Electronic Engineers) είναι
            μια παγκόσμια τεχνολογική, επαγγελματική, μη πολιτική οργάνωση με
            σκοπό την προώθηση της θεωρίας και των εφαρμογών της επιστήμης του
            Ηλεκτρολόγου Μηχανικού και Μηχανικού Υπολογιστών για την εξέλιξη του
            επαγγέλματος με γνώμονα την κοινωνική προσφορά.
            Στην ΙΕΕΕ είναι σήμερα εγγεγραμμένα περισσότερα από 400.000 μέλη εκ
            των οποίων περισσότεροι από 90.000 φοιτητές, σε περισσότερες από 160
            χώρες, γεγονός που την καθιστά τη μεγαλύτερη τεχνολογική επαγγελματική
             κοινότητα στον κόσμο.
          </p>
          <p> <br/>
            <span className="aboutTitle"> Οι φοιτητές στην ΙΕΕΕ </span> <br/>
            Οι φοιτητές παίζουν καθοριστικό ρόλο για την IEEE. Σήμερα υπάρχουν
            περισσότερες από 2000 φοιτητικές ομάδες της ΙΕΕΕ στον κόσμο. Σκοπός
            τους είναι να παρέχουν στους προπτυχιακούς και μεταπτυχιακούς
            φοιτητές, που ενδιαφέρονται για την επιστήμη του Ηλεκτρολόγου
             Μηχανικού, Μηχανικού Υπολογιστών ή συγγενείς επιστήμες, ευκαιρίες
             για ακαδημαϊκή, τεχνολογική και επαγγελματική εξέλιξη.
          </p>
          <span className="aboutTitle">
            Δραστηριότητες από φοιτητικές ομάδες
          </span>
          <ul>
              <li> Διοργάνωση σεμιναρίων, συνεδρίων (workshops) και ομιλιών
                από διακεκριμένους επιστήμονες με σκοπό την επιμόρφωση και
                ενημέρωση των φοιτητών γύρω από θέματα που αφορούν την
                επιστήμη των Ηλεκτρολόγων Μηχανικών, Μηχανικών Υπολογιστών ή
                παρεμφερείς επιστήμες.
              </li>
              <li> Διοργάνωση εκπαιδευτικών εκδρομών και επισκέψεων σε
                εταιρείες και ιδρύματα που ασχολούνται με την έρευνα και την
                ανάπτυξη συγγενών επιστημονικών πεδίων.
              </li>
              <li>
                Συμμετοχή σε φοιτητικούς διαγωνισμούς υπό την αιγίδα της ΙΕΕΕ
                 ή άλλων τεχνολογικών οργανισμών.
              </li>
              <li>
                Ενημέρωση των φοιτητών σχετικά με τις δραστηριότητες της ΙΕΕΕ
                 και τις δυνατότητες που τους παρέχονται από την οργάνωση.
              </li>
              <li>
                Διοργάνωση διαγωνισμών και βραβείων με σκοπό την διάκριση της.
              </li>
          </ul>
          <p>
            <span className="aboutTitle"> Γιατί να γίνεις μέλος στην IEEE </span>
            <br/>
            Η εγγραφή ενός φοιτητή ως μέλος της ΙΕΕΕ του παρέχει όλα τα προνόμια
             ενός κανονικού μέλους με το συγκριτικό πλεονέκτημα της πολύ
             μικρότερης συνδρομής. Η ΙΕΕΕ μέσω των πρωτοποριακών θεμάτων που
              πραγματεύεται και τη συμμετοχή σε διάφορες επαγγελματικές
              δραστηριότητες, συνέδρια κ.ά., σου δίνει τη δυνατότητα να είσαι
              ενήμερος της προόδου της τεχνολογίας και του κλάδου σου, των
              τελευταίων τάσεων της βιομηχανίας και – το πιο
              σημαντικό – σε βοηθάει τελικά στην καριέρα σου.
          </p>
          <span className="aboutTitle"> Οφέλη μέλους της IEEE  </span>
          <ul>
            <li> Λαμβάνεις το βραβευμένο μηνιαίο περιοδικό ΙΕΕΕ Spectrum, το
               οποίο περιλαμβάνει άρθρα για την κατάσταση του επαγγέλματος,
                ευκαιρίες για την καριέρα και την εκπαίδευση καθώς και
                 αφιερώματα στις πιο πρόσφατες τεχνολογικές εξελίξεις και τις
                 εφαρμογές τους.
            </li>
            <li>
              Έχεις δωρεάν ηλεκτρονική πρόσβαση στο περιοδικό POTENTIALS για
              φοιτητές και νέους επαγγελματίες.
            </li>
            <li>
              Μπορείς να πάρεις μέρος σε φοιτητικούς διαγωνισμούς που
              διοργανώνει η ΙΕΕΕ (όπως IEEEXtreme, Student Paper Contest κ.ά.)
               και να διακριθείς σε διεθνές επίπεδο.
            </li>
            <li> Μπορείς να διεκδικήσεις υποτροφίες για μέλη της ΙΕΕΕ. </li>
            <li> Αποκτάς δωρεάν @ieee.org email alias σε συνεργασία της ΙΕΕΕ με τη Google. </li>
            <li>
              Έχεις πρόσβαση σε καταλόγους προσφοράς εργασίας σε ευρωπαϊκό
              και διεθνές επίπεδο και σε εργαλεία προώθησης της καριέρας σου.
            </li>
            <li>
              Μπορείς να συμμετάσχεις σε φοιτητικά συνέδρια και συναντήσεις με
              άλλα μέλη στην Ελλάδα ή το εξωτερικό με σκοπό να ανταλλάξεις
              γνώσεις και απόψεις.
            </li>
            <li>
              Μπορείς να συμμετάσχεις σε όλα τα διεθνή επιστημονικά συνέδρια που
               διοργανώνει η ΙΕΕΕ έχοντας ειδικές χαμηλές φοιτητικές τιμές.
            </li>
            <li>
              Εξοικονομείς χρήματα με σημαντικές εκπτώσεις σε πάνω από 15.000
              βιβλία που εκδίδει η ΙΕΕΕ.
            </li>
            <li>
              Λαμβάνεις οικονομική ενίσχυση για μεταφορά σε επιστημονικό
              συνέδριο στο οποίο έχεις δημοσίευση.
            </li>
            <li>
              Χρησιμοποιείς το εργαλείο IEEE Xplore για εύκολη εύρεση οποιουδήποτε
              επιστημονικού άρθρου και πρόσβαση σε αυτό αν περιλαμβάνεται στη
              συνδρομή σου.
            </li>
          </ul>
          <p>
            <span className="aboutTitle">
              Είναι μια καλή ευκαιρία να ενημερωθείς, διαγωνιστείς, συμμετέχεις, ενημερωθείς.
            </span> <br/>
            α θέλαμε πολύ πριν γραφτείς, να μας γνωρίσεις, να μας ρωτήσεις ότι
            απορία έχεις σχετικά με την ΙΕΕΕ ή με το ΑΤΕΙΤΗ Student Branch.
            Θα βρείς πληροφορίες στο STUDENT BRANCH για να επικοινωνήσεις με
             κάποιον από εμάς ή μπορείς να στείλεις μήνυμα συμπληρώνοντας την
             φόρμα που θα βρείς στο CONTACT. Επίσης μπορείς να παρευρεθείς σε
              οποιαδήποτε εκδήλωση ή συνάντησή μας παρακολουθώντας τα EVENTS μας.
          </p>
        </Well>
    </Col>
    );
  }
}

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    this.setState({open: true});
  }

  render() {
    return(
      <Fade in={this.state.open} >
        <Col md={6} sm={10} mdOffset={3}>

            <div>
              <Image
                  src={require("./img/ieee_new_logo.jpg")}
                  alt="ieee_new_logo"
                  className="logoSmall"
              />

              <p className="contactInfo">
                email: ieeeteithe@gmail.com <br/>
                tel: this_is_a_phone_number <br/>
                facebook: https://facebook.com
              </p>
            </div>
        </Col>
      </Fade>
    );
  }
}

// main component contains everything
class Page extends React.Component {
  // initialize the component
  constructor() {
    super();
    this.state = {
      // relate pages with indexes
      pageIndexes: {
        home: 1,
        about: 2,
        events: 3,
        blog: 4,
        contact: 5
      },
      // declare the social tags
      social: {
        facebook: {
          name: 'facebook',
          target: 'https://facebook.com',
          source: './img/fb_logo.png'
        },
        twitter: {
          name: 'twitter',
          target: 'https://twitter.com',
          source: './img/twitter_logo.jpg'
        },
        github: {
          name: 'github',
          target: 'https://github.com',
          source: './img/github_logo.png'
        }
      },
      //  save what page is open by index.
      openPage: 1
    };
  }

  // this function is being used to change the openPage at status.
  // by changing that status the the page renders the requested page
  change_page(pageNum) {
    this.setState ({
      openPage: pageNum
    });
  }

  // this function decides which page will be shown by it's parameter.
  printPage(pageNum) {
    switch (this.state.openPage) {
      case 1: return <Home />;
      case 2: return <About />;
      case 5: return <Contact />;
      default: return null;
    }
  }

  // this function renders the component
  render() {
    return (
      <div>
        {/*  print the navigation bar. pass the pageIndexes, socialTags as parameters.
            by passing the change_page  function will allow to lower hierarchycaly components to
            change the <Page /> component status.
         */}
        <Navigation
          buttons={this.state.pageIndexes}
          social={this.state.social}
          onClick={(num) => this.change_page(num)}
          />
        {/* Print the page that is at <Page /> state.openPage */}
        {this.printPage(this.state.openPage)}
      </div>
    );
  }
}

ReactDOM.render(<Page />, root);
