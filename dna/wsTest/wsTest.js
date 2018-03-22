'use strict';

function signWrapped(input) {
  input = JSON.parse(input)
  return JSON.stringify(sign(input))
}

function commitWrapped(input) {
  input = JSON.parse(input)
  var hash = commit("abstract", input)
  commit("links", {
    Links: [
      { Base: App.DNA.Hash, Link: hash, Tag: "entry"}
    ]
  })
  return JSON.stringify(hash)
}

function removeWrapped(input) {
  input = JSON.parse(input)
  return JSON.stringify(remove(input.hash, input.message))
}

function getWrapped(input) {
  input = JSON.parse(input)
  return JSON.stringify(get(input))
}

function getAll() {
  return getLinks(App.DNA.Hash, "entry", {Load: true})
}

function genesis() {
  return true;
}

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "links":
    case "abstract":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case "links":
    case "abstract":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case "abstract":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case "abstract":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validateLink (entryName, baseHash, links, package, sources) {
  switch (entryName) {
    case "links":
      return true;
    default:
      // invalid entry name
      return false;
  }
}

function validatePutPkg (entryName) {
  return null;
}

function validateModPkg (entryName) {
  return null;
}

function validateDelPkg (entryName) {
  return null;
}

function validateLinkPkg (entryName) {
  return null;
}