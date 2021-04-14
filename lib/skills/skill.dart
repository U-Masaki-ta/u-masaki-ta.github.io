import 'package:flutter/material.dart';

class SkillWidget extends StatefulWidget {
  SkillWidget({Key key}) : super(key: key);

  @override
  SkillWidgetState createState() => SkillWidgetState();
}

class SkillWidgetState extends State<SkillWidget> {
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
          margin: EdgeInsets.symmetric(vertical: 120, horizontal: 70),
          child: Column(
            //crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              _textArea(),
              Wrap(
                direction: Axis.vertical,
                children: <Widget>[
                  _skill1(),
                  _skill2(),
                  _skill3(),
                  _skill4(),
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
        "Studying . . .",
        style: TextStyle(
          fontFamily: 'Oswald',
          fontSize: 25,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }

  Widget _skill1() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          width: 80,
          height: 100,
          decoration: BoxDecoration(
            image: DecorationImage(
              fit: BoxFit.fill,
              image: AssetImage('assets/imgs/logo/flutter.png'),
            ),
          ),
        ),
        Container(
          width: 120,
          height: 100,
          margin: EdgeInsets.only(bottom: 10),
          child: Center(
            child: Text(
              "Flutter",
              style: TextStyle(
                fontFamily: 'Oswald',
                fontSize: 18,
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _skill2() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          width: 90,
          height: 90,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10.0),
            image: DecorationImage(
              fit: BoxFit.fill,
              image: AssetImage('assets/imgs/logo/noimg.png'),
            ),
          ),
        ),
        Container(
          width: 100,
          height: 100,
          margin: EdgeInsets.only(bottom: 10),
          child: Center(
            child: Text(
              "Java",
              style: TextStyle(
                fontFamily: 'Oswald',
                fontSize: 18,
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _skill3() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          width: 90,
          height: 90,
          decoration: BoxDecoration(
            image: DecorationImage(
              fit: BoxFit.fill,
              image: AssetImage('assets/imgs/logo/unity.png'),
            ),
          ),
        ),
        Container(
          width: 100,
          height: 100,
          margin: EdgeInsets.only(bottom: 10),
          child: Center(
            child: Text(
              "Unity",
              style: TextStyle(
                fontFamily: 'Oswald',
                fontSize: 18,
              ),
            ),
          ),
        ),
      ],
    );
  }

  Widget _skill4() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.fromLTRB(20, 20, 20, 40),
          //margin: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          width: 90,
          height: 90,
          decoration: BoxDecoration(
            image: DecorationImage(
              fit: BoxFit.fill,
              image: AssetImage('assets/imgs/logo/git.png'),
            ),
          ),
        ),
        Container(
          width: 100,
          height: 100,
          margin: EdgeInsets.only(bottom: 40),
          //margin: EdgeInsets.only(bottom: 10),
          child: Center(
            child: Text(
              "Git",
              style: TextStyle(
                fontFamily: 'Oswald',
                fontSize: 18,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
