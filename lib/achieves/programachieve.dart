import 'package:flutter/material.dart';

class ProgramachieveWidget extends StatefulWidget {
  ProgramachieveWidget({Key key}) : super(key: key);

  @override
  ProgramachieveWidgetState createState() => ProgramachieveWidgetState();
}

class ProgramachieveWidgetState extends State<ProgramachieveWidget> {
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
          margin: EdgeInsets.fromLTRB(70, 120, 70, 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              _textArea(),
              Wrap(
                direction: Axis.horizontal,
                children: <Widget>[
                  _program(),
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
      margin: EdgeInsets.only(top: 10),
      child: Text(
        "Program",
        style: TextStyle(
          fontFamily: 'Oswald',
          fontSize: 25,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }

  Widget _program() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.symmetric(horizontal: 20, vertical: 20),
          width: 300,
          height: 200,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8.0),
            image: DecorationImage(
              fit: BoxFit.fill,
              image: AssetImage('assets/imgs/thumbnail/RollerBall_for_VR.png'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 10),
          child: Text(
            "Oculus Quest 対応　RollerBall",
            style: TextStyle(
              fontFamily: 'Oswald',
              fontSize: 18,
            ),
          ),
        ),
      ],
    );
  }
}
