// 1、引入kekule库
var Kekule = require('kekule');
// console.log(Kekule);

// 2、创建一个 mol分子对象
function createMol() {
	var mol = new Kekule.Molecule(); 	// create molecule
	// add atoms to molecule
	mol.appendNode(new Kekule.Atom().setSymbol('C').setCoord2D({x: 0, y: 0.80}));
	// explicit set mass number of an atom
	mol.appendNode(new Kekule.Atom().setSymbol('C').setMassNumber(13).setCoord2D({x: -0.69, y: 0.40}));
	mol.appendNode(new Kekule.Atom().setSymbol('C').setCoord2D({x: -0.69, y: -0.40}));
	// a pseudo atom
	mol.appendNode(new Kekule.Pseudoatom().setAtomType(Kekule.PseudoatomType.ANY).setCoord2D({x: 0, y: -0.80}));
	mol.appendNode(new Kekule.Atom().setSymbol('C').setCoord2D({x: 0.69, y: -0.40}));
	mol.appendNode(new Kekule.Atom().setSymbol('C').setCoord2D({x: 0.69, y: 0.40}));
	// a variable atom
	mol.appendNode(new Kekule.VariableAtom().setAllowedIsotopeIds(['F', 'Cl', 'Br']).setCoord2D({x: 1.39, y: 0.80}));

	// add bonds to molecule
	//   here a shortcut method appendBond(atomIndexes, bondOrder) is used
	mol.appendBond([0, 1], 1);
	mol.appendBond([1, 2], 2);
	mol.appendBond([2, 3], 1);
	mol.appendBond([3, 4], 2);
	mol.appendBond([4, 5], 1);
	mol.appendBond([5, 0], 2);
	mol.appendBond([5, 6], 1);

	return mol;
}
var mol = createMol();

// 3、在标签上创建 视图小部件Viewer
var element = document.getElementById('chemViewer');
// console.log(element);
// 写法一：直接在标签上创建（不需要 webpack进行通过编译，能直接替换标签；直接写在html中，直接双击打开html文件可看到效果）
// var chemViewer = new Kekule.ChemWidget.Viewer(element);
// 写法二：创建一个新的标签，挂载到标签的子标签上（JS的这部分需要通过 webpack进行编译，而标签部分不需要通过 webpack编译，才能挂载成功）
var chemViewer = new Kekule.ChemWidget.Viewer(document);
chemViewer.setDimension('500px', '400px');
chemViewer.appendToElem(element);

// 4、在 视图小部件Viewer 上读取mol对象
chemViewer.setChemObj(mol);