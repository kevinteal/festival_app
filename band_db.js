// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
	
		db.transaction(function (tx) {
		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name TEXT)');
		
		//thursday sophie tent
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Balls Deep", "Sophie Lancaster Stage", 20140807, 1825, 1855, 0, 1, "Thursday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Gehtika", "Sophie Lancaster Stage", 20140807, 1915, 1945, 0, 1, "Thursday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Incinery", "Sophie Lancaster Stage", 20140807, 2005, 2035, 0, 1, "Thursday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Monument", "Sophie Lancaster Stage", 20140807, 2055, 2135, 0, 1, "Thursday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Jaldaboath", "Sophie Lancaster Stage", 20140807, 2205, 2245, 0, 1, "Thursday")');
	
		
		//friday main
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Bloodshot Dawn", "Ronnie James Dio Stage", 20140808, 1100, 1140, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Entombed AD", "Ronnie James Dio Stage", 20140808, 1200, 1240, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Primordial", "Ronnie James Dio Stage", 20140808, 1305, 1345, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Flotsam and Jestam", "Ronnie James Dio Stage", 20140808, 1410, 1455, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Prong", "Ronnie James Dio Stage", 20140808, 1520, 1605, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Triptykon", "Ronnie James Dio Stage", 20140808, 1635, 1720, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Hatebreed", "Ronnie James Dio Stage", 20140808, 1755, 1855, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Dimmu Borgir", "Ronnie James Dio Stage", 20140808, 1930, 2030, 0, 0, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Down", "Ronnie James Dio Stage", 20140808, 2115, 2245, 0, 0, "Friday")');
		
		
		
		
		//friday sophie
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Gurt", "Sophie Lancaster Stage", 20140808, 1100, 1130, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Cambion", "Sophie Lancaster Stage", 20140808, 1150, 1220, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Aghast", "Sophie Lancaster Stage", 20140808, 1240, 1310, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Krokodil", "Sophie Lancaster Stage", 20140808, 1330, 1400, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "De Profundis", "Sophie Lancaster Stage", 20140808, 1420, 1500, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Zerozonic", "Sophie Lancaster Stage", 20140808, 1520, 1600, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Deals Death", "Sophie Lancaster Stage", 20140808, 1625, 1705, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Winterfylleth", "Sophie Lancaster Stage", 20140808, 1735, 1815, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Diabolical", "Sophie Lancaster Stage", 20140808, 1845, 1930, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Skycald", "Sophie Lancaster Stage", 20140808, 2000, 2100, 0, 1, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Rotting Christ", "Sophie Lancaster Stage", 20140808, 2130, 2245, 0, 1, "Friday")');
		
		
		//friday new blood
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Goat Leaf", "Newblood Stage", 20140808, 1030, 1100, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Convincing Clearity", "Newblood Stage", 20140808, 1115, 1145, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "No Sin Evades His Gaze", "Newblood Stage", 20140808, 1200, 1230, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Abhorrent Decimation", "Newblood Stage", 20140808, 1245, 1315, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Brutai", "Newblood Stage", 20140808, 1330, 1400, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Oakhaart", "Newblood Stage", 20140808, 1415, 1445, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Alone With Wolves", "Newblood Stage", 20140808, 1500, 1530, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Sinpathetic", "Newblood Stage", 20140808, 1545, 1615, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Hog Slayer", "Newblood Stage", 20140808, 1630, 1700, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Dog Tired", "Newblood Stage", 20140808, 1715, 1745, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Angerman", "Newblood Stage", 20140808, 1800, 1830, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Jonestown", "Newblood Stage", 20140808, 1845, 1915, 0, 2, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Jacknife Siezure", "Newblood Stage", 20140808, 1930, 2000, 0, 2, "Friday")');
		
		
		
		//friday jager
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Cadence Noir", "Jagermeister Stage", 20140808, 1340, 1410, 0, 3, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Ten Foot Wizard", "Jagermeister Stage", 20140808, 1450, 1520, 0, 3, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Undersmile", "Jagermeister Stage", 20140808, 1600, 1630, 0, 3, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "King Creature", "Jagermeister Stage", 20140808, 1720, 1750, 0, 3, "Friday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Alcadama", "Jagermeister Stage", 20140808, 1900, 1930, 0, 3, "Friday")');
		
		
		//saturday main
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Evil Scarecrow", "Ronnie James Dio Stage", 20140809, 1100, 1140, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Shining", "Ronnie James Dio Stage", 20140809, 1200, 1240, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Decapitated", "Ronnie James Dio Stage", 20140809, 1305, 1345, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Orphaned Land", "Ronnie James Dio Stage", 20140809, 1410, 1455, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Crowbar", "Ronnie James Dio Stage", 20140809, 1520, 1605, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Lacuna Coil", "Ronnie James Dio Stage", 20140809, 1635, 1720, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "Children of Bodom", "Ronnie James Dio Stage", 20140809, 1755, 1855, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Carcass", "Ronnie James Dio Stage", 20140809, 1940, 2040, 0, 0, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Emperor", "Ronnie James Dio Stage", 20140809, 2130, 2245, 0, 0, "Saturday")');
		
		
		//saturday sophie
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Babylon Fire", "Sophie Lancaster Stage", 20140809, 1100, 1130, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "The King is Blind", "Sophie Lancaster Stage", 20140809, 1150, 1220, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Old Corpse Road", "Sophie Lancaster Stage", 20140809, 1240, 1310, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "The Mercy House", "Sophie Lancaster Stage", 20140809, 1330, 1400, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Profane Omen", "Sophie Lancaster Stage", 20140809, 1420, 1500, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Conquest Of Steel", "Sophie Lancaster Stage", 20140809, 1520, 1600, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Obsidian Kingdom", "Sophie Lancaster Stage", 20140809, 1625, 1705, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Blood Red Throne", "Sophie Lancaster Stage", 20140809, 1735, 1815, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Battleaxe", "Sophie Lancaster Stage", 20140809, 1845, 1930, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "Sister Sin", "Sophie Lancaster Stage", 20140809, 2000, 2100, 0, 1, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Hell Yeah", "Sophie Lancaster Stage", 20140809, 2130, 2230, 0, 1, "Saturday")');
		
		
		//saturday new blood
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Back Down or Die", "Newblood Stage", 20140809, 1030, 1100, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Reprisal", "Newblood Stage", 20140809, 1115, 1145, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Darkeye", "Newblood Stage", 20140809, 1200, 1230, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "The Threat", "Newblood Stage", 20140809, 1245, 1315, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Synaptik", "Newblood Stage", 20140809, 1330, 1400, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Born Of The Jackal", "Newblood Stage", 20140809, 1415, 1445, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Resin", "Newblood Stage", 20140809, 1500, 1530, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Metaprism", "Newblood Stage", 20140809, 1545, 1615, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Phantom", "Newblood Stage", 20140809, 1630, 1700, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Canyon Observer", "Newblood Stage", 20140809, 1715, 1745, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Warcrab", "Newblood Stage", 20140809, 1800, 1830, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Cacodaemonic", "Newblood Stage", 20140809, 1845, 1915, 0, 2, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "All Consumed", "Newblood Stage", 20140809, 1930, 2000, 0, 2, "Saturday")');
		
		
		//saturday jager
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "The Amoretties", "Jagermeister Stage", 20140809, 1340, 1410, 0, 3, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Darkhorse", "Jagermeister Stage", 20140809, 1450, 1520, 0, 3, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Massive Wagons", "Jagermeister Stage", 20140809, 1600, 1630, 0, 3, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Orphaned Land", "Jagermeister Stage", 20140809, 1720, 1750, 0, 3, "Saturday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Alzir", "Jagermeister Stage", 20140809, 1900, 1930, 0, 3, "Saturday")');
		
		
		
		
		//sunday main
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Arthemis", "Ronnie James Dio Stage", 20140810, 1100, 1140, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Aborted", "Ronnie James Dio Stage", 20140810, 1200, 1240, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Re Vamp", "Ronnie James Dio Stage", 20140810, 1305, 1345, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Biohazard", "Ronnie James Dio Stage", 20140810, 1410, 1455, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Graveyard", "Ronnie James Dio Stage", 20140810, 1520, 1605, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Obituary", "Ronnie James Dio Stage", 20140810, 1635, 1720, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Saxon", "Ronnie James Dio Stage", 20140810, 1755, 1855, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Amon Amarth", "Ronnie James Dio Stage", 20140810, 1930, 2030, 0, 0, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Megadeth", "Ronnie James Dio Stage", 20140810, 2115, 2245, 0, 0, "Sunday")');
		
		
		
		//sunday sophie
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Aaron Keylock", "Sophie Lancaster Stage", 20140810, 1100, 1130, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "October File", "Sophie Lancaster Stage", 20140810, 1150, 1220, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Hearken", "Sophie Lancaster Stage", 20140810, 1240, 1310, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Morgue Orgy", "Sophie Lancaster Stage", 20140810, 1330, 1400, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Voices", "Sophie Lancaster Stage", 20140810, 1420, 1500, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Stahlsarg", "Sophie Lancaster Stage", 20140810, 1520, 1600, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Stormzone", "Sophie Lancaster Stage", 20140810, 1625, 1705, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Krow", "Sophie Lancaster Stage", 20140810, 1735, 1815, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Collibus", "Sophie Lancaster Stage", 20140810, 1845, 1930, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Avatar", "Sophie Lancaster Stage", 20140810, 2000, 2100, 0, 1, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Satan", "Sophie Lancaster Stage", 20140810, 2130, 2245, 0, 1, "Sunday")');
		
		
		
		//sunday new blood
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Byzanthian Neckbeard", "Newblood Stage", 20140810, 1030, 1100, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "King Goat", "Newblood Stage", 20140810, 1115, 1145, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Unforseen Prophecy", "Newblood Stage", 20140810, 1200, 1230, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Eradikator", "Newblood Stage", 20140810, 1245, 1315, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Akb al", "Newblood Stage", 20140810, 1330, 1400, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Leatherneck", "Newblood Stage", 20140810, 1415, 1445, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Psykosis", "Newblood Stage", 20140810, 1500, 1530, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Today The Sun Dies", "Newblood Stage", 20140810, 1545, 1615, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Stoneghost", "Newblood Stage", 20140810, 1630, 1700, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Scordatura", "Newblood Stage", 20140810, 1715, 1745, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Kill All The Gentleman", "Newblood Stage", 20140810, 1800, 1830, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Once Upon", "Newblood Stage", 20140810, 1845, 1915, 0, 2, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "The Self Titled", "Newblood Stage", 20140810, 1930, 2000, 0, 2, "Sunday")');
		//sunday jager
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Resin", "Jagermeister Stage", 20140810, 1340, 1410, 0, 3, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Rabid Bitch Of The North", "Jagermeister Stage", 20140810, 1450, 1520, 0, 3, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "The Heretic Order", "Jagermeister Stage", 20140810, 1600, 1630, 0, 3, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Ded Orse", "Jagermeister Stage", 20140810, 1720, 1750, 0, 3, "Sunday")');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Enk Elination", "Jagermeister Stage", 20140810, 1900, 1930, 0, 3, "Sunday")');
		
		
		
		
		
		
		
	
		
		
		//set_up_stages();
		set_up_main_page();
	});
}













