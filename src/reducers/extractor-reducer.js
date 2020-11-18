import { parse } from '../extractors/extractor';

const initialState = {

	inputOptions: [
		['Emails','email','[a-zA-Z0-9._-]+@([a-zA-Z0-9_-]+\\.)+[a-zA-Z0-9_-]+'],
		['Phone numbers','phone','[0-9-\\(\\)\\+][0-9-\\(\\)\\+ ]{7,17}'],
		['Numbers','numbers','[0-9]+'],
		['Web addresses (URLs)','url','(https?:\\/\\/|www.)(www.)?[a-zA-Z0-9]+\\.([a-zA-Z0-9]{2,3})(\\.[a-zA-Z0-9]{2,3})?([a-zA-Z0-9.-_/?=]+)?'],
		['Words','words','[a-zA-Z]{2,60}'],
		['Wikidata IDs','wikidata','(Q|P)\\d+'],
		['Characters','chars','.'],
		['Regular expression','custom','']
	],

	outputOptions: [
		['New line','newline'],
		['Comma only',','],
		['br (html)','<br />'],
		['Comma and space',', '],
		['Tab','	']
	],

	rawText: '*** 𝐄𝐗𝐀𝐌𝐏𝐋𝐄 𝐓𝐄𝐗𝐓 ***\n\n' +

	'𝗘𝗠𝗔𝗜𝗟𝗦 invalid@.com, anna@mail.com, jane@mail.com.co, john@invalid, @invalid, john@mail.net, anna@mail.net\n' +
	'𝗣𝗛𝗢𝗡𝗘 𝗡𝗨𝗠𝗕𝗘𝗥𝗦 098999555, (+582) 576821, 320-42-22, +5 999 999 555, +5 999 999 555\n' +
	'𝗨𝗥𝗟𝗦 htt://www.domain.com/something, http://ok.com.ru, https://www.secure.edu, www.test.com/path/morepath?s=string\n' +
	'𝗪𝗜𝗞𝗜𝗗𝗔𝗧𝗔 𝗜𝗗𝗦 Q1, q184226, Q77, P106, P31, P31, T423, p45\n' +
	'𝗡𝗨𝗠𝗕𝗘𝗥𝗦 234423, 7567, 234123\n\n' +

	'«Quem recitas meus est, o Fidentine, libellus: sed male cum recitas, incipit esse tuus.»\n\n' +

	'¯\\_(ツ)_/¯\n',

	sort: false,
	unique: true,
	uppercase: false,

	outputText: ''
}
initialState.type = initialState.inputOptions[0][1];
initialState.separator = initialState.outputOptions[0][1];
initialState.regexText = initialState.inputOptions[0][2];
initialState.regex = initialState.regexText;

function getRegex(state, id){
	for(var val of state.inputOptions){
		if(val[1] == id){
			if(id == 'custom') return state.regexText;
			else return val[2];
		}
	}
}

export default (state = initialState, action) => {

    switch(action.type){
      case 'parseConfig':
        return Object.assign({}, state, {
        	type: action.payload,
        	regex: getRegex(state, action.payload)
		});
        break;

      case 'outputConfig':
      	return Object.assign({}, state, {
      		separator: action.payload
		});
        break;

      case 'parseText':
      	return Object.assign({}, state, {
      		rawText: action.payload
		});
        break;

      case 'parseRegex':
      	return Object.assign({}, state, {
			regexText: action.payload,
			regex: action.payload
		});
        break

      case 'caseSelector':
      	return Object.assign({}, state, {
			uppercase: action.payload
		});
        break;

      case 'sortSelector':
      	return Object.assign({}, state, {
			sort: action.payload
		});
        break;

      case 'uniqueSelector':
      	return Object.assign({}, state, {
			unique: action.payload
		});
        break;

      case 'clearText':
      	return Object.assign({}, state, {
      		rawText: ''
		});
        break;

      case '':
      	return state;
        break;

      default:
      	return Object.assign({}, state, {
			outputText: parse(state.rawText, state.separator, state.regex, state.sort, state.unique, state.uppercase)
		});
        break;
    }

    return state;
}