//import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter_portfolio/about/about.dart';
import 'package:flutter_portfolio/achieves/programachieve.dart';
import 'package:flutter_portfolio/achieves/illustachieve.dart';
import 'package:flutter_portfolio/achieves/modelachieve.dart';
import 'package:flutter_portfolio/contacts/contact.dart';
import 'package:flutter_portfolio/skills/skill.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the main
  const MyApp({Key key}) : super(key: key);

  static const String _title = 'My Portfolio';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      //ページのタイトル
      title: _title,
      theme: ThemeData(
        primarySwatch: Colors.red,
        primaryColor: Colors.orange[200],
      ),
      home: Stack(
        children: <Widget>[
          Image(
            width: double.infinity,
            height: double.infinity,
            image: AssetImage('assets/imgs/background.jpg'),
            fit: BoxFit.cover,
          ),
          MyHomePage(),
        ],
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  //ここ調べる
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  TabController _tabController;
  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 4, vsync: this);
  }

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.transparent,
      appBar: AppBar(
        title: Text(
          'My Portfolio',
          style: TextStyle(
            fontFamily: 'Oswald',
            fontSize: 30,
            fontWeight: FontWeight.bold,
          ),
        ),
        bottom: TabBar(
          controller: _tabController,
          indicatorWeight: 5,
          tabs: const <Widget>[
            Tab(
              child: Text(
                'About',
                style: TextStyle(
                  fontFamily: 'Oswald',
                  fontSize: 18,
                  fontStyle: FontStyle.italic,
                ),
              ),
            ),
            Tab(
              child: Text(
                'Achieves',
                style: TextStyle(
                  fontFamily: 'Oswald',
                  fontSize: 18,
                  fontStyle: FontStyle.italic,
                ),
              ),
            ),
            Tab(
              child: Text(
                'Skills',
                style: TextStyle(
                  fontFamily: 'Oswald',
                  fontSize: 18,
                  fontStyle: FontStyle.italic,
                ),
              ),
            ),
            Tab(
              child: Text(
                'Contacts',
                style: TextStyle(
                  fontFamily: 'Oswald',
                  fontSize: 18,
                  fontStyle: FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: <Widget>[
          SingleChildScrollView(child: AboutWidget()),
          ListView(
            children: [
              ProgramachieveWidget(),
              IllistachieveWidget(),
              ModelingachieveWidget(),
            ],
          ),
          SkillWidget(),
          ContactWidget(),
        ],
      ),
    );
  }

  var descTextStyle = TextStyle(
    fontFamily: 'NotoSun',
  );
}
