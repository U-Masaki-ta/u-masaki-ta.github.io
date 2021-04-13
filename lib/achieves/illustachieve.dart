import 'package:flutter/material.dart';

class IllistachieveWidget extends StatefulWidget {
  IllistachieveWidget({Key key}) : super(key: key);

  @override
  IllistachieveWidgetState createState() => IllistachieveWidgetState();
}

class IllistachieveWidgetState extends State<IllistachieveWidget> {
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
          margin: EdgeInsets.fromLTRB(70, 20, 70, 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              _textArea(),
              Wrap(
                direction: Axis.horizontal,
                children: <Widget>[
                  _illist1(),
                  _illist2(),
                  _illist3(),
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
      margin: EdgeInsets.only(top: 5),
      child: Text(
        "Illusts(Fan Art)",
        style: TextStyle(
          fontFamily: 'Oswald',
          fontSize: 25,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }

  Widget _illist1() {
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
              image: AssetImage('assets/imgs/Ghostdance.PNG'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 10),
          child: Text(
            "ゴーストダンスFA",
            style: TextStyle(
              fontFamily: 'Oswald',
              fontSize: 18,
            ),
          ),
        ),
      ],
    );
  }

  Widget _illist2() {
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
              image: AssetImage('assets/imgs/menou.PNG'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 10),
          child: Text(
            "夜撫でるメノウFA",
            style: TextStyle(
              fontFamily: 'Oswald',
              fontSize: 18,
            ),
          ),
        ),
      ],
    );
  }

  Widget _illist3() {
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
              image: AssetImage('assets/imgs/Ghosttokyo.jpg'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 10),
          child: Text(
            "幽霊東京FA",
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
