import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { ViewTitle } from "react-admin";

export default () => (
  <Card>
    <ViewTitle title="Welcome to {mebin}" />
    <CardContent />
  </Card>
);
