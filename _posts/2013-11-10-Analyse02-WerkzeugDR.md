---
layout: post
title: Werkzeug Design Radar
category: analysis
lightbox: [
Desktop-DesignRadar-00.png, 
Desktop-DesignRadar-01.png, 
Desktop-DesignRadar-02.png, 
Desktop-DesignRadar-03.png, 
Desktop-DesignRadar-04.png, 
Desktop-DesignRadar-05.png, 
Desktop-DesignRadar-06.png, 
Desktop-DesignRadar-07.png, 
Desktop-DesignRadar-08.png, 
Desktop-DesignRadar-09.png, 
Desktop-DesignRadar-10.png, 
Desktop-DesignRadar-11.png, 
Desktop-DesignRadar-Cluster-WP.png, 
Desktop-DesignRadar-Objekt-WP.png
]
---

Das Werkzeug basiert derzeit auf einer Wordpress Installation, was durchaus ein guter Anfang ist, nach meiner Meinung jedoch auf lange Sicht, mehr Nach-, als Vorteile mit sich bringt. Ich denke, es eignet sich gut zum Befüllen einer Datenbank mit Designobjekten, die Vorkonfektioniertheit des Wordpress Frameworks schränkt aber die kreative Umsetzung von Werkzeugen, wie dem Design Radar, stark ein. Jegliche Interaktion fühlt sich sehr _bloggig_ an. 

#### Die Eingabe

Was am für mich anfangs sehr verwirrend war, ist der Umstand, dass der User eigentlich im Front End arbeiten soll. Die Entscheidung ist für mich nachvollziehbar, da das Wordpress Back End zu viele Optionen anbietet, als dass man damit schnell und einfach Objekte einpflegen könnte, und das Layout eines Wordpress Back Ends ändern möchte man eigentlich auch nicht, wenn es nicht unbedingt sein muss. Deshalb muss man zuerst auf das Front End wechseln, wenn man sich in den Design Radar eingeloggt hat.

Der User landet auf der _Objects_ Ansicht. Es gibt hier die Möglichkeit sich alle Objekte des Design Radars anzuschauen. An der Seite haben wir Filter Optionen. Unter dem Menüpunkt _Cluster_ Kann sich der User alle Cluster des Design Radar anzeigen lassen und unter _MyRadar_ kann der User seine eigenen Objekte und Cluster verwalten und neu erstellen.

##### Objekt
Die Eingabemaske verlangt eine Fülle von Parameter, die ich der Vollständigkeit halber im Glossar unter Objekt aufliste. Sehr Praktisch ist, dass dem Benutzer für einige Felder (u.a. Farben, Designer, Material) ein Katalog zur Verfügung steht, aus dem er schon gelistetes auswählen kann. Dies stellt sich einem Auto-Complete-Drop-Down-Menu dar. Besondere Beachtung verdienen die beiden semantischen Differentiale. Unter den Punkten _Räumlich physikalische Wirkung_ und _Assoziative Wirkung_ finden wir einmal 8 und einmal 16 Extrempaare, zwischen denen wir, mithilfe eines Schiebereglers auf einer 5er-Skala, differenzieren können. Unüblich, aber möglich, ist die Option keine Angaben zu machen. In diesem Fall wird das betreffende Extrempaar ausgegraut. Insgesamt kann der Design Radar User Angaben zu 35 Parametern machen.

##### Cluster
Wenn ich einen neuen Cluster erstellt habe, sind erst einmal alle Objekte in Ihm enthalten (Big Bug!!!). Das ändert sich erst, wenn ich andernorts ein Objekt meinem Cluster hinzugefügt habe. Das geht unter der Ansicht _Objects_ und wird unter dem nachfolgenden Punkt beschrieben. Grob kann man den Cluster in drei Bereiche einteilen: die _Objekte_, den generativen Teil _Auffälligkeiten_ und den editorial Teil. Die _Objekte_ werden durch das ihnen eigene Bild repräsentiert, durch einen Klick darauf gelangt man zur Objektanzeige. Der Bereich _Auffälligkeiten_ generiert sich durch die Parameter der hinzugefügten Objekte. Leider werden nur die Parameter _Designer, Materialeigenschaften, Farbpalette und Assoziative Tags_ in Betracht gezogen. Der editorial Teil führt die Punkte auf, die wir schon von der InDesign Vorlage her kennen.

#### Die Verwaltung
Sehr wordpress-typisch mutet die Verwaltung der Objekte an. In einem Raster werden die Objekte durch ihre Fotos repräsentiert. Wenn der User mit der Maus über ein Objekt fährt, erhält er die Möglichkeit durch einen Klick auf den entsprechenden Knopf, das Objekt zu editieren, was soviel heißt, dass er in die vorher beschriebene Eingabemaske zurückkehrt und Parameter verändert oder vervollständigt. Um nach Clustern zu suchen, hat der Benutzer die Möglichkeit, Objekte anhand von 4 Parametern (Herstellungszeitraum, Form, Material, Tags) zu filtern. Die verbleibenden Objekte kann er dann zu einem seiner Cluster hinzufügen.  

#### Die Ausgabe
Es gibt derzeit keine wirklich gestaltete Ausgabe aus dem Werkzeug heraus. Man kann sich alle Objekte und Cluster anschauen, allerdings unterscheidet sich diese Darstellung nicht großartig von der Eingabemaske. Der letzte Stand der Dinge ist, dass die gesammelten Erkenntnisse und Objekte des Clusters in die bereits erwähnte InDesign-Vorlage übertragen und so als Poster ausgedruckt werden.

Anders als bei der analogen Methodik ist man hier sehr allein mit seinen Objekten, Clustern und den dahinter stehenden Überlegungen. Der spielerische Aspekt geht, aufgrund der fehlenden haptischen Repräsentation der Objekte, verloren. Eine Arrangement der Objekte nach eigener Vorstellung ist in der aktuellen Konfiguration nicht möglich. Hingegen werden leider auch nicht die Vorzüge des digitalen Mediums genutzt. Beispielsweise finden die semantischen Differentiale keine Erwähnung im Cluster, was in Hinsicht auf die Menge der dort abgefragt Parameter sehr schade ist.
