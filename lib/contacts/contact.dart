import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

const _urltwitter = 'https://twitter.com/KaN0_uta';
const _urlnote = 'https://note.com/u_masaki_ta';
const _urlgithub = 'https://github.com/U-Masaki-ta';
const _mailaddress = 'u.masaki.ta@gmail.com';

class ContactWidget extends StatefulWidget {
  ContactWidget({Key key}) : super(key: key);

  @override
  ContactWidgetState createState() => ContactWidgetState();
}

class ContactWidgetState extends State<ContactWidget> {
  @override
  Widget build(BuildContext context) {
    return (_createachive(context));
  }

  Container _createachive(BuildContext context) {
    return Container(
      child: SingleChildScrollView(
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8.0),
            color: Color.fromARGB(230, 255, 255, 255),
          ),
          margin: EdgeInsets.fromLTRB(120, 120, 120, 120),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              _textArea(),
              Wrap(
                direction: Axis.vertical,
                children: <Widget>[
                  _twitter(),
                  _note(),
                  _github(),
                  _mail(),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _textArea() {
    return Container(
      margin: EdgeInsets.fromLTRB(0, 10, 0, 20),
      child: Text(
        "Contacts",
        style: TextStyle(
          fontFamily: 'Oswald',
          fontSize: 25,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }

  Widget _twitter() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.only(bottom: 20),
          width: 50,
          height: 50,
          child: Image(
            image: AssetImage('assets/imgs/logo/twitter.png'),
          ),
        ),
        Container(
          width: 150,
          height: 100,
          margin: EdgeInsets.only(bottom: 20),
          child: Center(
            child: ElevatedButton(
              child: Text('Show Twitter'),
              style: ElevatedButton.styleFrom(
                primary: Colors.blue,
                onPrimary: Colors.white,
                textStyle: TextStyle(
                  fontSize: 15,
                ),
              ),
              onPressed: () {
                _launchURL(_urltwitter);
              },
            ),
          ),
        ),
      ],
    );
  }

  Widget _note() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.only(bottom: 20),
          width: 50,
          height: 50,
          child: Image(
            image: AssetImage('assets/imgs/logo/note.png'),
          ),
        ),
        Container(
          width: 150,
          height: 100,
          margin: EdgeInsets.only(bottom: 20),
          child: Center(
            child: ElevatedButton(
              child: Text('Show Note'),
              style: ElevatedButton.styleFrom(
                primary: Colors.tealAccent[700],
                onPrimary: Colors.white,
                textStyle: TextStyle(
                  fontSize: 15,
                ),
              ),
              onPressed: () {
                _launchURL(_urlnote);
              },
            ),
          ),
        ),
      ],
    );
  }

  Widget _github() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.only(bottom: 20),
          width: 50,
          height: 50,
          child: Image(
            image: AssetImage('assets/imgs/logo/github.png'),
          ),
        ),
        Container(
          width: 150,
          height: 100,
          margin: EdgeInsets.only(bottom: 20),
          child: Center(
            child: ElevatedButton(
              child: Text('Show GitHub'),
              style: ElevatedButton.styleFrom(
                primary: Colors.grey[900],
                onPrimary: Colors.white,
                textStyle: TextStyle(
                  fontSize: 15,
                ),
              ),
              onPressed: () {
                _launchURL(_urlgithub);
              },
            ),
          ),
        ),
      ],
    );
  }

  Widget _mail() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.only(bottom: 20),
          width: 50,
          height: 50,
          child: Image(
            image: AssetImage('assets/imgs/logo/mail.png'),
          ),
        ),
        Container(
          width: 150,
          height: 100,
          margin: EdgeInsets.only(bottom: 20),
          child: Center(
            child: ElevatedButton(
              child: Text('Send Mail'),
              style: ElevatedButton.styleFrom(
                primary: Colors.red[400],
                onPrimary: Colors.white,
                textStyle: TextStyle(
                  fontSize: 15,
                ),
              ),
              onPressed: () {
                _openMailapp();
              },
            ),
          ),
        ),
      ],
    );
  }

  _launchURL(_url) async {
    if (await canLaunch(_url)) {
      await launch(_url);
    } else {
      throw 'Could not launch $_url';
    }
  }

  _openMailapp() {
    final title = Uri.encodeComponent('title');
    final body = Uri.encodeComponent('main');

    return _launchURL(
      'mailto:$_mailaddress?subject=$title&body=$body',
    );
  }
}
