import 'package:flutter/material.dart';

class ModelingachieveWidget extends StatefulWidget {
  ModelingachieveWidget({Key key}) : super(key: key);

  @override
  ModelingachieveWidgetState createState() => ModelingachieveWidgetState();
}

class ModelingachieveWidgetState extends State<ModelingachieveWidget> {
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
          margin: EdgeInsets.fromLTRB(70, 20, 70, 120),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              _textArea(),
              Wrap(
                direction: Axis.horizontal,
                children: <Widget>[
                  _model1(),
                  _model2(),
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
        "3D Models",
        style: TextStyle(
          fontFamily: 'Oswald',
          fontSize: 25,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }

  Widget _model1() {
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
              image: AssetImage('assets/imgs/thumbnail/model1.png'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 10),
          child: Text(
            "VRChat想定モデル",
            style: TextStyle(
              fontFamily: 'Oswald',
              fontSize: 18,
            ),
          ),
        ),
      ],
    );
  }

  Widget _model2() {
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
              image: AssetImage('assets/imgs/thumbnail/model2.png'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 10),
          child: Text(
            "Unityゲーム用モデル",
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
