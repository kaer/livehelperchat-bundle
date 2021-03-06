<?php

$def = new ezcPersistentObjectDefinition();
$def->table = "lh_departament_limit_group_member";
$def->class = "erLhcoreClassModelDepartamentLimitGroupMember";

$def->idProperty = new ezcPersistentObjectIdProperty();
$def->idProperty->columnName = 'id';
$def->idProperty->propertyName = 'id';
$def->idProperty->generator = new ezcPersistentGeneratorDefinition(  'ezcPersistentNativeGenerator' );

$def->properties['dep_id'] = new ezcPersistentObjectProperty();
$def->properties['dep_id']->columnName   = 'dep_id';
$def->properties['dep_id']->propertyName = 'dep_id';
$def->properties['dep_id']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_INT;

$def->properties['dep_limit_group_id'] = new ezcPersistentObjectProperty();
$def->properties['dep_limit_group_id']->columnName   = 'dep_limit_group_id';
$def->properties['dep_limit_group_id']->propertyName = 'dep_limit_group_id';
$def->properties['dep_limit_group_id']->propertyType = ezcPersistentObjectProperty::PHP_TYPE_INT;

return $def;

?>