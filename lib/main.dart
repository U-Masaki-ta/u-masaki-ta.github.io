import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter_portfolio/about.dart';

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
        primaryColor: Colors.blue[200],
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
        title: Text('My Portfolio'),
        bottom: TabBar(
          controller: _tabController,
          indicatorWeight: 5,
          tabs: const <Widget>[
            Tab(
              text: 'About',
            ),
            Tab(
              text: 'Achieves',
            ),
            Tab(
              text: 'Skills',
            ),
            Tab(
              text: 'Contact',
            ),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: <Widget>[
          AboutWidget(),
          Center(
            child: const Text("Achieves"),
          ),
          Center(
            child: const Text("Skills"),
          ),
          Center(
            child: const Text("Contact"),
          ),
        ],
      ),
    );
  }
}
