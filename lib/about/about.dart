import 'package:flutter/material.dart';

class AboutWidget extends StatefulWidget {
  AboutWidget({Key key}) : super(key: key);

  @override
  AboutWidgetState createState() => AboutWidgetState();
}

class AboutWidgetState extends State<AboutWidget> {
  @override
  Widget build(BuildContext context) {
    return (_createabout(context));
  }

  Container _createabout(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(vertical: 120, horizontal: 70),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(8.0),
        color: Color.fromARGB(230, 255, 255, 255),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          _profileArea(),
          _textArea(),
          _introArea(),
        ],
      ),
    );
  }

  Widget _profileArea() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Container(
          margin: EdgeInsets.fromLTRB(0, 30, 0, 10),
          width: 150,
          height: 150,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            image: DecorationImage(
              fit: BoxFit.fill,
              image: AssetImage('assets/imgs/profile.jpg'),
            ),
          ),
        ),
        Container(
          margin: EdgeInsets.only(bottom: 5),
          child: Center(
            child: Text(
              "Masaki Nakayama",
              style: TextStyle(
                fontFamily: 'Oswald',
                fontSize: 30,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        )
      ],
    );
  }

  Widget _textArea() {
    return Container(
      child: Text(
        "About me",
        style: TextStyle(
          fontFamily: 'Oswald',
          fontSize: 20,
          fontStyle: FontStyle.italic,
        ),
      ),
    );
  }

  Widget _introArea() {
    return Container(
      padding: EdgeInsets.fromLTRB(0, 30, 0, 20),
      child: DefaultTextStyle.merge(
        style: descTextStyle,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text("中京大学工学部情報工学科３年"),
            Text("ラシキアゼミ所属　中山　雅貴"),
            Text("\n"),
            Text("趣味 : 読書・旅行・写真・絵・歌"),
            Text("\n"),
            Text("大学・学部を決めたきっかけ"),
            Text("\n"),
            Text("ゲームをプレイすることが好きで"),
            Text("ゲームがどのように作られている"),
            Text("のかに興味を持ったこと　　　　"),
            Text("\n\n\n\n"),
            Text("©2021 U-Masaki-ta"),
          ],
        ),
      ),
    );
  }

  var descTextStyle = TextStyle(
    fontFamily: 'NotoSun',
  );
}
